// components/ui/file-upload-fixed.tsx
"use client";

import * as React from "react";
import { useDropzone, type DropzoneProps } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
	value?: File[] | null;
	onValueChange?: (files: File[] | null) => void;
	dropzoneOptions?: Omit<DropzoneProps, "onDrop">;
	orientation?: "horizontal" | "vertical";
	inputId?: string; // ✅ NOWE: Dodano prop dla accessibility
}

const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
	(
		{
			className,
			dropzoneOptions,
			value,
			onValueChange,
			orientation = "vertical",
			children,
			inputId, // ✅ NOWE: Prop dla accessibility
			...props
		},
		ref,
	) => {
		const onDrop = React.useCallback(
			(acceptedFiles: File[]) => {
				const files = acceptedFiles;
				if (!files) {
					onValueChange?.(null);
					return;
				}
				onValueChange?.(files);
			},
			[onValueChange],
		);

		const { getRootProps, getInputProps, isDragActive } = useDropzone({
			onDrop,
			...dropzoneOptions,
		});

		// ✅ NOWE: Pobierz input props i dodaj id dla accessibility
		const inputProps = getInputProps();
		if (inputId) {
			inputProps.id = inputId;
		}

		return (
			<div
				ref={ref}
				{...getRootProps()}
				className={cn(
					"relative w-full cursor-pointer",
					orientation === "horizontal"
						? "flex flex-row gap-2"
						: "flex flex-col gap-2",
					className,
				)}
				{...props}
			>
				{/* ✅ NAPRAWIONE: Input ma teraz id dla accessibility */}
				<input {...inputProps} />
				{children}
			</div>
		);
	},
);

FileUploader.displayName = "FileUploader";

const FileInput = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"relative w-full rounded-md px-3 py-3 text-center hover:bg-muted/25",
				"ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
});

FileInput.displayName = "FileInput";

const FileUploaderContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className }, ref) => {
	return (
		<div ref={ref} className={cn("w-full px-3", className)}>
			{children}
		</div>
	);
});

FileUploaderContent.displayName = "FileUploaderContent";

// ✅ POPRAWIONY INTERFEJS z wszystkimi potrzebnymi props
interface FileUploaderItemProps extends React.HTMLAttributes<HTMLDivElement> {
	index: number;
	onRemove?: (index: number) => void;
	showRemoveButton?: boolean;
}

const FileUploaderItem = React.forwardRef<
	HTMLDivElement,
	FileUploaderItemProps
>(
	(
		{ className, children, index, onRemove, showRemoveButton = true, ...props },
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					"relative flex items-center justify-between rounded-md bg-background p-2 pr-8",
					className,
				)}
				{...props}
			>
				<div className="flex items-center gap-2 flex-1 min-w-0">{children}</div>
				{showRemoveButton && onRemove && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
						onClick={(e) => {
							e.stopPropagation();
							onRemove(index);
						}}
					>
						<X className="h-3 w-3" />
						<span className="sr-only">Usuń plik</span>
					</Button>
				)}
			</div>
		);
	},
);

FileUploaderItem.displayName = "FileUploaderItem";

export { FileUploader, FileInput, FileUploaderContent, FileUploaderItem };
