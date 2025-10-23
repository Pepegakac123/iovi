// components/forms/ContactForm-fixed.tsx
"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, Paperclip, Send } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// ✅ NAPRAWIONY: Import poprawionego FileUploader
import {
	FileUploader,
	FileInput,
	FileUploaderContent,
	FileUploaderItem,
} from "@/components/ui/file-upload";

import {
	FormSection,
	AnimatedFieldWrapper,
	NameField,
	EmailField,
	PhoneField,
	DescriptionField,
} from "@/components/forms/ContactFormField";

import { useMainContactForm } from "@/hooks/useContactFormField";
import {
	getFormConfig,
	getFormStyles,
	getFormMotion,
} from "@/lib/config/form-config";
import InstagramBtn from "../buttons/InstragramBtn";
import { socialLinks } from "@/lib/data";

// ===========================================
// CONTACT FORM PROPS
// ===========================================

interface ContactFormProps {
	onSuccess?: (data: any) => void;
	onError?: (error: Error) => void;
	className?: string;
}

// ===========================================
// MAIN CONTACT FORM COMPONENT
// ===========================================

const ContactForm: React.FC<ContactFormProps> = ({
	onSuccess,
	onError,
	className = "",
}) => {
	// ✅ UŻYWAMY: Istniejący hook z projektu
	const {
		form,
		files,
		setFiles,
		isSubmitting,
		handleSubmit,
		removeFile,
		formatPhone,
	} = useMainContactForm({ onSuccess, onError });

	// ✅ UŻYWAMY: Istniejący system konfiguracji
	const config = getFormConfig("main");
	const styles = getFormStyles("main");
	const motionPresets = getFormMotion("main");

	// ✅ NAPRAWIONE: Proper onSubmit z accessibility
	const onSubmit = form.handleSubmit(handleSubmit);

	// ✅ NAPRAWIONE: File handling z validacją
	const handleFilesChange = (newFiles: File[] | null) => {
		if (!newFiles) {
			setFiles([]);
			return;
		}

		const combinedFiles = [...(files || []), ...newFiles];

		// Sprawdź limit plików
		if (combinedFiles.length > config.files.maxFiles) {
			const excessCount = combinedFiles.length - config.files.maxFiles;
			const limitedFiles = combinedFiles.slice(0, config.files.maxFiles);
			setFiles(limitedFiles);
			console.warn(
				`Usunięto ${excessCount} najstarszych plików. Maksymalnie ${config.files.maxFiles} plików.`,
			);
		} else {
			setFiles(combinedFiles);
		}
	};

	return (
		<div className={`w-full mx-auto ${className}`}>
			{/* ✅ UŻYWAMY: Istniejący brutal design container */}
			<motion.div
				className={styles.container}
				initial={motionPresets.container.main.hidden}
				animate={motionPresets.container.main.visible}
				whileHover={motionPresets.container.main.hover}
			>
				<Form {...form}>
					<motion.form
						onSubmit={onSubmit}
						className={styles.spacing}
						variants={motionPresets.form.main}
						initial="hidden"
						animate="visible"
					>
						{/* ✅ UŻYWAMY: Istniejące form fields z accessibility */}
						<motion.div variants={motionPresets.field.main}>
							<FormSection variant="main">
								<AnimatedFieldWrapper variant="main">
									<NameField form={form} variant="main" />
								</AnimatedFieldWrapper>

								<AnimatedFieldWrapper variant="main">
									<EmailField form={form} variant="main" />
								</AnimatedFieldWrapper>

								<motion.div
									variants={motionPresets.field.main}
									className="md:col-span-2 xl:col-span-1"
								>
									<PhoneField
										form={form}
										variant="main"
										formatPhone={formatPhone}
									/>
								</motion.div>
							</FormSection>
						</motion.div>

						{/* ✅ UŻYWAMY: Istniejący textarea field */}
						<motion.div variants={motionPresets.field.main}>
							<DescriptionField form={form} variant="main" rows={6} />
						</motion.div>

						{/* ✅ NAPRAWIONE: File Upload Section z accessibility */}
						<motion.div variants={motionPresets.field.main}>
							<div className="space-y-2">
								{/* ✅ NAPRAWIONE: Label z poprawnym htmlFor */}
								<motion.label
									htmlFor="mainFileInput"
									className="text-foreground font-primary text-sm font-bold uppercase inline-block"
								>
									Prześlij wzór
									<span className="text-xs text-muted-foreground font-normal normal-case ml-1">
										(Opcjonalne - Max. {config.files.maxSize / (1024 * 1024)}MB,
										do {config.files.maxFiles} plików)
									</span>
								</motion.label>

								<motion.div>
									{/* ✅ NAPRAWIONE: FileUploader z inputId dla accessibility */}
									<FileUploader
										value={files}
										onValueChange={handleFilesChange}
										dropzoneOptions={config.files}
										inputId="mainFileInput" // ✅ NOWE: id matching htmlFor
										className="relative bg-secondary border-2 border-dashed hover:border-accent border-foreground rounded-md"
									>
										<FileInput>
											<div className="flex flex-col items-center justify-center space-y-2 p-4 min-h-[120px]">
												<motion.div
													animate={{ rotate: [0, 10, -10, 0] }}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut",
													}}
												>
													<Paperclip className="h-8 w-8 text-primary" />
												</motion.div>
												<p className="text-sm font-primary text-foreground text-center">
													<span className="font-bold">
														Kliknij lub przeciągnij
													</span>
												</p>
												<p className="text-xs text-muted-foreground text-center">
													Maks. {config.files.maxSize / (1024 * 1024)}MB, do{" "}
													{config.files.maxFiles} plików
												</p>
											</div>
										</FileInput>

										<FileUploaderContent className="space-y-2 pb-2">
											<AnimatePresence mode="popLayout">
												{files &&
													files.length > 0 &&
													files.map((file, i) => (
														<motion.div
															key={`${file.name}-${file.size}-${i}`}
															initial={{ opacity: 0, x: -20, scale: 0.8 }}
															animate={{ opacity: 1, x: 0, scale: 1 }}
															exit={{
																opacity: 0,
																x: 20,
																scale: 0.8,
																height: 0,
																marginTop: 0,
																transition: {
																	duration: 0.3,
																	ease: "easeInOut",
																},
															}}
															transition={{
																type: "spring",
																stiffness: 200,
																damping: 20,
															}}
														>
															<FileUploaderItem
																index={i}
																onRemove={removeFile}
																className="bg-background border-2 border-foreground hover:bg-accent/20 transition-all duration-200 rounded-sm"
															>
																<motion.div
																	animate={{ rotate: [0, 5, -5, 0] }}
																	transition={{
																		duration: 2,
																		repeat: Infinity,
																		ease: "easeInOut",
																	}}
																>
																	<Paperclip className="h-4 w-4 stroke-current text-primary" />
																</motion.div>
																<span className="font-text text-foreground text-sm font-medium">
																	{file.name}
																	<span className="text-xs text-muted-foreground ml-2">
																		({(file.size / 1024 / 1024).toFixed(1)}MB)
																	</span>
																</span>
															</FileUploaderItem>
														</motion.div>
													))}
											</AnimatePresence>
										</FileUploaderContent>
									</FileUploader>
								</motion.div>
							</div>
						</motion.div>

						{/* ✅ UŻYWAMY: Istniejący submit button */}
						{/* Submit Section */}
						<motion.div
							className="flex gap-4 flex-col w-full items-center justify-center pt-6"
							variants={motionPresets.field.main}
						>
							{/* Submit Button */}
							<motion.button
								type="submit"
								disabled={isSubmitting}
								className="bg-primary cursor-pointer text-background font-primary text-base md:text-lg w-full px-4 md:px-8 py-4 uppercase border-2 border-foreground rounded-md flex items-center hover:bg-accent justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
								whileHover={
									!isSubmitting
										? {
												scale: 1.05,
												boxShadow: "4px 4px 0px 0px var(--foreground)",
												transition: { duration: 0.2 },
											}
										: {}
								}
								whileTap={
									!isSubmitting
										? {
												scale: 0.98,
												transition: { duration: 0.1 },
											}
										: {}
								}
							>
								{isSubmitting ? (
									<>
										<Loader2 className="w-5 h-5 animate-spin" />
										Wysyłam...
									</>
								) : (
									<>
										<Send className="w-5 h-5" />
										Wyślij wiadomość
									</>
								)}
							</motion.button>

							<motion.span
								className="text-foreground uppercase text-lg md:text-xl font-primary font-bold"
								variants={motionPresets.span.main}
								whileHover={{
									scale: 1.1,
									color: "hsl(var(--primary))",
									transition: { type: "spring", stiffness: 400 },
								}}
							>
								LUB
							</motion.span>

							{/* Instagram Button */}
							<motion.div
								className="w-full flex justify-center"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<InstagramBtn
									link={socialLinks.iovi.instagram}
									text="Napisz na Instagramie"
								/>
							</motion.div>

							{/* Footer Text */}
							<motion.p
								className="text-xs text-muted-foreground text-center max-w-md mx-auto leading-relaxed"
								variants={motionPresets.field.main}
							>
								Wysyłając formularz wyrażasz zgodę na przetwarzanie danych
								osobowych zgodnie z{" "}
								<a
									href="/polityka-prywatnosci"
									className="text-primary hover:text-accent underline"
								>
									polityką prywatności
								</a>
								. Strona jest chroniona przez reCAPTCHA Google.
							</motion.p>
						</motion.div>
					</motion.form>
				</Form>
			</motion.div>
		</div>
	);
};

export default ContactForm;
