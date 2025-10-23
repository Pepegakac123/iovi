// components/forms/PopupForm-fixed.tsx
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

import { usePopupContactForm } from "@/hooks/useContactFormField";
import {
	getFormConfig,
	getFormStyles,
	getFormMotion,
} from "@/lib/config/form-config";
import Image from "next/image";
import { ICONS } from "@/lib/icons";
import { socialLinks } from "@/lib/data";

// ===========================================
// POPUP FORM PROPS
// ===========================================

interface PopupFormProps {
	onSuccess?: (data: any) => void;
	onError?: (error: Error) => void;
	onComplete?: () => void; // Callback do zamknięcia popup
	className?: string;
}

// ===========================================
// POPUP CONTACT FORM COMPONENT
// ===========================================

const PopupForm: React.FC<PopupFormProps> = ({
	onSuccess,
	onError,
	onComplete,
	className = "",
}) => {
	// ✅ UŻYWAMY: Istniejący hook z projektu (popup variant)
	const {
		form,
		files,
		setFiles,
		isSubmitting,
		handleSubmit,
		removeFile,
		formatPhone,
	} = usePopupContactForm({
		onSuccess: (data) => {
			onSuccess?.(data);
			onComplete?.(); // Zamknij popup po sukcesie
		},
		onError,
	});

	// ✅ UŻYWAMY: Istniejący system konfiguracji (popup variant)
	const config = getFormConfig("popup");
	const styles = getFormStyles("popup");
	const motionPresets = getFormMotion("popup");

	// ✅ NAPRAWIONE: Proper onSubmit z accessibility
	const onSubmit = form.handleSubmit(handleSubmit);

	// ✅ NAPRAWIONE: File handling z validacją (popup limits)
	const handleFilesChange = (newFiles: File[] | null) => {
		if (!newFiles) {
			setFiles([]);
			return;
		}

		const combinedFiles = [...(files || []), ...newFiles];

		// Sprawdź limit plików (popup ma mniejszy limit)
		if (combinedFiles.length > config.files.maxFiles) {
			const excessCount = combinedFiles.length - config.files.maxFiles;
			const limitedFiles = combinedFiles.slice(0, config.files.maxFiles);
			setFiles(limitedFiles);
			console.warn(
				`Usunięto ${excessCount} najstarszych plików. Maksymalnie ${config.files.maxFiles} plików w popup.`,
			);
		} else {
			setFiles(combinedFiles);
		}
	};

	return (
		<div className={`w-full ${className}`}>
			<Form {...form}>
				<motion.form
					onSubmit={onSubmit}
					className={styles.spacing}
					variants={motionPresets.form.popup}
					initial="hidden"
					animate="visible"
				>
					{/* ✅ UŻYWAMY: Compact form fields dla popup */}
					<motion.div variants={motionPresets.field.popup}>
						<FormSection variant="popup">
							<AnimatedFieldWrapper variant="popup">
								<NameField form={form} variant="popup" />
							</AnimatedFieldWrapper>
						</FormSection>
					</motion.div>

					<motion.div variants={motionPresets.field.popup}>
						<FormSection variant="popup">
							<AnimatedFieldWrapper variant="popup">
								<EmailField form={form} variant="popup" />
							</AnimatedFieldWrapper>
						</FormSection>
					</motion.div>

					<motion.div variants={motionPresets.field.popup}>
						<FormSection variant="popup">
							<AnimatedFieldWrapper variant="popup">
								<PhoneField
									form={form}
									variant="popup"
									formatPhone={formatPhone}
								/>
							</AnimatedFieldWrapper>
						</FormSection>
					</motion.div>

					<motion.div variants={motionPresets.field.popup}>
						<FormSection variant="popup">
							<AnimatedFieldWrapper variant="popup">
								<DescriptionField form={form} variant="popup" rows={2} />
							</AnimatedFieldWrapper>
						</FormSection>
					</motion.div>

					{/* ✅ NAPRAWIONE: File Upload Section z accessibility */}
					<motion.div variants={motionPresets.field.popup}>
						<div className="space-y-1">
							{/* ✅ NAPRAWIONE: Label z poprawnym htmlFor */}
							<motion.label
								htmlFor="popupFileInput"
								className="text-foreground font-primary text-xs font-bold uppercase inline-block"
							>
								Prześlij wzór
								<span className="text-xs text-muted-foreground font-normal normal-case ml-1">
									(Opcjonalne)
								</span>
							</motion.label>

							<motion.div>
								{/* ✅ NAPRAWIONE: FileUploader z inputId dla accessibility */}
								<FileUploader
									value={files}
									onValueChange={handleFilesChange}
									dropzoneOptions={config.files}
									inputId="popupFileInput" // ✅ NOWE: id matching htmlFor
									className="relative bg-secondary border-2 border-dashed hover:border-accent border-foreground rounded-md"
								>
									<FileInput>
										<div className="flex flex-col items-center justify-center space-y-1 p-2 min-h-[80px]">
											<motion.div
												animate={{ rotate: [0, 8, -8, 0] }}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											>
												<Paperclip className="h-5 w-5 text-primary" />
											</motion.div>
											<p className="text-xs font-primary text-foreground text-center">
												<span className="font-bold">
													Kliknij lub przeciągnij
												</span>
											</p>
											<p className="text-xs text-muted-foreground text-center">
												Maks. {config.files.maxSize / (1024 * 1024)}MB,{" "}
												{config.files.maxFiles} pliki
											</p>
										</div>
									</FileInput>

									<FileUploaderContent className="space-y-1 pb-1">
										<AnimatePresence mode="popLayout">
											{files &&
												files.length > 0 &&
												files.map((file, i) => (
													<motion.div
														key={`popup-${file.name}-${file.size}-${i}`}
														initial={{ opacity: 0, x: -15, scale: 0.9 }}
														animate={{ opacity: 1, x: 0, scale: 1 }}
														exit={{
															opacity: 0,
															x: 15,
															scale: 0.9,
															height: 0,
															marginTop: 0,
															transition: {
																duration: 0.2,
																ease: "easeInOut",
															},
														}}
														transition={{
															type: "spring",
															stiffness: 300,
															damping: 25,
														}}
													>
														<FileUploaderItem
															index={i}
															onRemove={removeFile}
															className="bg-background border border-foreground hover:bg-accent/20 transition-all duration-200 rounded-sm py-1"
														>
															<motion.div
																animate={{ rotate: [0, 3, -3, 0] }}
																transition={{
																	duration: 2,
																	repeat: Infinity,
																	ease: "easeInOut",
																}}
															>
																<Paperclip className="h-3 w-3 stroke-current text-primary" />
															</motion.div>
															<span className="font-text text-foreground text-xs font-medium truncate">
																{file.name}
																<span className="text-xs text-muted-foreground ml-1">
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

					{/* Submit Button */}
					<motion.div
						className="flex gap-2 flex-col w-full items-center justify-center pt-2"
						variants={motionPresets.field.popup}
					>
						<motion.button
							type="submit"
							disabled={isSubmitting}
							className="bg-primary hover:bg-accent cursor-pointer text-background font-primary text-xs w-full px-3 py-2 uppercase border-2 border-foreground rounded-md flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary transition-colors duration-150"
							whileHover={
								!isSubmitting
									? {
											scale: 1.01,
											boxShadow: "2px 2px 0px 0px var(--foreground)",
										}
									: {}
							}
							whileTap={
								!isSubmitting
									? {
											scale: 0.98,
										}
									: {}
							}
							transition={{
								duration: 0.15,
							}}
						>
							{isSubmitting ? (
								<>
									<Loader2 className="h-3 w-3 animate-spin" />
									WYSYŁANIE...
								</>
							) : (
								<>
									WYŚLIJ
									<Send className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
								</>
							)}
						</motion.button>

						<motion.span
							className="text-foreground uppercase text-xs font-primary font-bold"
							variants={motionPresets.span.popup}
							whileHover={{
								scale: 1.03,
								color: "hsl(var(--primary))",
								transition: { type: "spring", stiffness: 400 },
							}}
						>
							LUB
						</motion.span>

						{/* Instagram Button */}
						<motion.a
							href={socialLinks.iovi.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block w-full"
						>
							<motion.div className="w-full" variants={motionPresets.div.popup}>
								<motion.button
									type="button"
									className="bg-secondary hover:bg-muted cursor-pointer text-foreground font-primary text-xs w-full px-3 py-2 uppercase border-2 border-foreground rounded-md flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
									whileHover={{
										scale: 1.01,
										boxShadow: "2px 2px 0px 0px var(--foreground)",
									}}
									whileTap={{
										scale: 0.98,
									}}
									transition={{
										duration: 0.15,
									}}
								>
									Napisz na Instagramie
									<Image
										src={ICONS.instagram}
										alt="Instagram"
										width={16}
										height={16}
										className="group-hover:filter group-hover:brightness-110"
									/>
								</motion.button>
							</motion.div>
						</motion.a>

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
		</div>
	);
};

export default PopupForm;
