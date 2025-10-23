import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
	React.ComponentProps<"input">,
	"onChange" | "value" | "ref"
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
		onChange?: (value: RPNInput.Value) => void;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, value, ...props }, ref) => {
			return (
				<div className="group relative w-full overflow-visible isolation">
					<RPNInput.default
						ref={ref}
						className={cn(
							"flex w-full transition-all duration-200",
							// Group hover effects - jednolity shadow i transform dla całego komponentu

							// Group focus-within effects
							" group-focus-within:translate-x-[-2px] group-focus-within:translate-y-[-2px] group-focus-within:z-10",
							// Group hover dla poszczególnych elementów
							"[&:hover_.country-selector]:border-accent [&:hover_.phone-input]:border-accent",
							className,
						)}
						flagComponent={FlagComponent}
						countrySelectComponent={CountrySelect}
						inputComponent={InputComponent}
						smartCaret={false}
						value={value || undefined}
						onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
						{...props}
					/>
				</div>
			);
		},
	);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
	<Input
		className={cn(
			// Bazowe style
			"phone-input rounded-e-md rounded-s-none bg-background h-12 px-4 py-3",
			"border-2 border-l-0 border-foreground",
			// Wyłączone wszystkie indywidualne hover/focus animacje
			"hover:translate-x-0 hover:translate-y-0 hover:shadow-none hover:bg-background",
			"focus:translate-x-0 focus:translate-y-0 focus:shadow-none",
			// Focus state
			"focus:border-primary focus:ring-2 focus:ring-primary/50",
			// Border connection na focus
			"group-focus-within:border-l-2 group-focus-within:border-primary",
			// Typography
			"font-text text-base placeholder:text-muted-foreground",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	options: CountryEntry[];
	onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
	disabled,
	value: selectedCountry,
	options: countryList,
	onChange,
}: CountrySelectProps) => {
	const scrollAreaRef = React.useRef<HTMLDivElement>(null);
	const [searchValue, setSearchValue] = React.useState("");
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Popover
			open={isOpen}
			modal
			onOpenChange={(open) => {
				setIsOpen(open);
				open && setSearchValue("");
			}}
		>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant="outline"
					className={cn(
						// Bazowe style identyczne jak Input
						"country-selector flex gap-1 rounded-e-none rounded-s-md bg-background px-3 h-12",
						"border-2 border-r-0 border-foreground",
						// Wyłączone wszystkie indywidualne hover/focus animacje
						"hover:translate-x-0 hover:translate-y-0 hover:shadow-none hover:bg-background",
						"focus:translate-x-0 focus:translate-y-0 focus:shadow-none focus:bg-background",
						// Focus state
						"focus:border-primary focus:ring-2 focus:ring-primary/50",
						"transition-all duration-200",
						disabled && "opacity-50 cursor-not-allowed",
					)}
					disabled={disabled}
				>
					<FlagComponent
						country={selectedCountry}
						countryName={selectedCountry}
					/>
					<ChevronsUpDown
						className={cn(
							"-mr-2 size-4 opacity-70",
							disabled ? "hidden" : "opacity-100",
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0 border-2 border-foreground rounded-md shadow-[4px_4px_0px_0px_theme(colors.foreground)] bg-background">
				<Command className="bg-background border-0">
					<CommandInput
						value={searchValue}
						onValueChange={(value) => {
							setSearchValue(value);
							setTimeout(() => {
								if (scrollAreaRef.current) {
									const viewportElement = scrollAreaRef.current.querySelector(
										"[data-radix-scroll-area-viewport]",
									);
									if (viewportElement) {
										viewportElement.scrollTop = 0;
									}
								}
							}, 0);
						}}
						placeholder="Szukaj kraju..."
						className="border-b-2 border-foreground rounded-none font-text bg-background"
					/>
					<CommandList>
						<ScrollArea ref={scrollAreaRef} className="h-72">
							<CommandEmpty className="py-6 text-center text-sm font-text">
								Nie znaleziono kraju.
							</CommandEmpty>
							<CommandGroup>
								{countryList.map(({ value, label }) =>
									value ? (
										<CountrySelectOption
											key={value}
											country={value}
											countryName={label}
											selectedCountry={selectedCountry}
											onChange={onChange}
											onSelectComplete={() => setIsOpen(false)}
										/>
									) : null,
								)}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
	selectedCountry: RPNInput.Country;
	onChange: (country: RPNInput.Country) => void;
	onSelectComplete: () => void;
}

const CountrySelectOption = ({
	country,
	countryName,
	selectedCountry,
	onChange,
	onSelectComplete,
}: CountrySelectOptionProps) => {
	const handleSelect = () => {
		onChange(country);
		onSelectComplete();
	};

	return (
		<CommandItem
			className="gap-2 font-text hover:bg-accent transition-colors cursor-pointer"
			onSelect={handleSelect}
		>
			<FlagComponent country={country} countryName={countryName} />
			<span className="flex-1 text-sm">{countryName}</span>
			<span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
			<CheckIcon
				className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100 text-primary" : "opacity-0"}`}
			/>
		</CommandItem>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className="flex h-4 w-6 overflow-hidden rounded-sm bg-muted border border-foreground/50 [&_svg:not([class*='size-'])]:size-full">
			{Flag && <Flag title={countryName} />}
		</span>
	);
};

export { PhoneInput };
