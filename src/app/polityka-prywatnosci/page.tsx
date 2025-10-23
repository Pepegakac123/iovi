// src/app/polityka-prywatnosci/page.tsx
import React from "react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "next-seo";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";

export const metadata: Metadata = {
	title: "Polityka prywatności",
	description:
		"Polityka prywatności i ochrony danych osobowych - IOVI INK Jowita Potaczek",
	robots: "noindex, follow",
};

const PrivacyPolicyPage: React.FC = () => {
	return (
		<>
			<BreadcrumbJsonLd
				useAppDir={true}
				itemListElements={[
					{
						position: 1,
						name: "Strona główna",
						item: "https://iovi-ink.pl",
					},
					{
						position: 2,
						name: "Polityka prywatności",
						item: "https://iovi-ink.pl/polityka-prywatnosci",
					},
				]}
			/>

			<motion.div
				className="container mx-auto py-16 px-4 max-w-4xl"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.h1 className="heading-primary mb-8" variants={itemVariants}>
					Polityka prywatności i plików cookies
				</motion.h1>

				<motion.div
					className="space-y-12 text-foreground"
					variants={containerVariants}
				>
					{/* 1. Informacje ogólne */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">1. Informacje ogólne</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>
								Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
								adresem url: <strong>https://iovi-ink.pl/</strong>
							</p>
							<p>
								Operatorem serwisu oraz Administratorem danych osobowych jest:{" "}
								<strong>Jowita Potaczek</strong> - indywidualna tatuażystka.
							</p>
							<p>
								Adres kontaktowy poczty elektronicznej operatora:{" "}
								<strong>{process.env.EMAIL_TO}</strong>
							</p>
							<p>
								Operator jest Administratorem Twoich danych osobowych w
								odniesieniu do danych podanych dobrowolnie w Serwisie.
							</p>
							<p>Serwis wykorzystuje dane osobowe w następujących celach:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Obsługa zapytań kontaktowych</li>
								<li>Prezentacja oferty usług tatuażu</li>
								<li>Analiza ruchu na stronie (za zgodą)</li>
							</ul>
							<p>
								Serwis realizuje funkcje pozyskiwania informacji o użytkownikach
								i ich zachowaniu w następujący sposób:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Poprzez dobrowolnie wprowadzone w formularzach dane, które
									zostają wprowadzone do systemów Operatora.
								</li>
								<li>
									Poprzez zapisywanie w urządzeniach końcowych plików cookie
									(tzw. „ciasteczka").
								</li>
							</ul>
						</div>
					</motion.section>

					{/* 2. Wybrane metody ochrony danych */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							2. Wybrane metody ochrony danych stosowane przez Operatora
						</h2>
						<ul className="list-disc pl-6 space-y-3 paragraph-secondary">
							<li>
								Miejsca logowania i wprowadzania danych osobowych są chronione w
								warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe
								wprowadzone na stronie zostają zaszyfrowane w komputerze
								użytkownika i mogą być odczytane jedynie na docelowym serwerze.
							</li>
							<li>
								W celu ochrony danych Operator regularnie wykonuje kopie
								bezpieczeństwa.
							</li>
							<li>
								Istotnym elementem ochrony danych jest regularna aktualizacja
								wszelkiego oprogramowania, wykorzystywanego przez Operatora do
								przetwarzania danych osobowych.
							</li>
						</ul>
					</motion.section>

					{/* 3. Hosting */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">3. Hosting</h2>
						<p className="paragraph-secondary">
							Serwis jest hostowany (technicznie utrzymywany) na serwerach
							operatora: <strong>SEOHOST</strong>
						</p>
					</motion.section>

					{/* 4. Twoje prawa */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
							danych
						</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>
								W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
								dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
								wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
								ciążących na Administratorze. Dotyczy to takich grup odbiorców:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Dostawcy usług email (w celu obsługi zapytań kontaktowych)
								</li>
								<li>Dostawcy usług hostingowych</li>
							</ul>
							<p>
								Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
								niż jest to konieczne do wykonania związanych z nimi czynności
								określonych osobnymi przepisami. W odniesieniu do danych
								marketingowych dane nie będą przetwarzane dłużej niż przez 3
								lata.
							</p>
							<p>Przysługuje Ci prawo żądania od Administratora:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>dostępu do danych osobowych Ciebie dotyczących,</li>
								<li>ich sprostowania,</li>
								<li>usunięcia,</li>
								<li>ograniczenia przetwarzania,</li>
								<li>oraz przenoszenia danych.</li>
							</ul>
							<p>
								Na działania Administratora przysługuje skarga do Prezesa Urzędu
								Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
							</p>
							<p>
								Podanie danych osobowych jest dobrowolne, lecz niezbędne do
								obsługi Serwisu.
							</p>
							<p>
								Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu
								przepisów o ochronie danych osobowych. Oznacza to, że nie
								przesyłamy ich poza teren Unii Europejskiej (z wyjątkiem Google
								Analytics, gdzie dane są anonimizowane).
							</p>
						</div>
					</motion.section>

					{/* 5. Informacje w formularzach */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							5. Informacje w formularzach
						</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>
								Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
								tym dane osobowe, o ile zostaną one podane.
							</p>
							<p>
								Serwis może zapisać informacje o parametrach połączenia
								(oznaczenie czasu, adres IP).
							</p>
							<p>
								Dane podane w formularzu kontaktowym są przetwarzane w celu
								obsługi zapytania oraz udzielenia odpowiedzi. Każdorazowo
								kontekst i opis formularza w czytelny sposób informuje, do czego
								służy.
							</p>
						</div>
					</motion.section>

					{/* 6. Logi Administratora */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">6. Logi Administratora</h2>
						<p className="paragraph-secondary">
							Informacje o zachowaniu użytkowników w serwisie mogą podlegać
							logowaniu. Dane te są wykorzystywane w celu administrowania
							serwisem.
						</p>
					</motion.section>

					{/* 7. Istotne techniki marketingowe */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							7. Analiza ruchu - Google Analytics
						</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>
								Po wyrażeniu przez Ciebie zgody, Operator stosuje analizę
								statystyczną ruchu na stronie, poprzez Google Analytics (Google
								Inc. z siedzibą w USA).
							</p>
							<p>
								Operator nie przekazuje do operatora tej usługi danych
								osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na
								wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
							</p>
							<p>
								W zakresie informacji o preferencjach użytkownika gromadzonych
								przez sieć reklamową Google użytkownik może przeglądać i
								edytować informacje wynikające z plików cookies przy pomocy
								narzędzia:
								<a
									href="https://www.google.com/ads/preferences/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-accent underline ml-1"
								>
									https://www.google.com/ads/preferences/
								</a>
							</p>
							<p>
								<strong>
									Możesz w każdej chwili cofnąć zgodę na cookies analityczne
								</strong>{" "}
								- wyczyść cookies w przeglądarce i odśwież stronę, aby ponownie
								wybrać preferencje.
							</p>
						</div>
					</motion.section>

					{/* 8. Informacja o plikach cookies */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							8. Informacja o plikach cookies
						</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>Serwis korzysta z plików cookies.</p>
							<p>
								Pliki cookies (tzw. „ciasteczka") stanowią dane informatyczne, w
								szczególności pliki tekstowe, które przechowywane są w
								urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do
								korzystania ze stron internetowych Serwisu.
							</p>
							<p>
								Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
								Serwisu pliki cookies oraz uzyskującym do nich dostępu jest
								operator Serwisu.
							</p>
							<p>Pliki cookies wykorzystywane są w następujących celach:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Zapamiętanie zgody na pliki cookies</li>
								<li>
									Analiza ruchu na stronie (Google Analytics) - tylko po
									wyrażeniu zgody
								</li>
								<li>
									Zapewnienie prawidłowego działania formularzy kontaktowych
								</li>
							</ul>

							<h3 className="text-lg font-semibold mt-6 mb-3">
								Rodzaje cookies:
							</h3>
							<div className="space-y-3">
								<div>
									<h4 className="font-medium">
										Cookies niezbędne (zawsze aktywne):
									</h4>
									<p>
										Przechowują informację o zgodzie na cookies oraz zapewniają
										podstawowe funkcje strony.
									</p>
								</div>
								<div>
									<h4 className="font-medium">
										Cookies analityczne (opcjonalne):
									</h4>
									<p>
										Google Analytics - zbierają zanonimizowane dane o sposobie
										korzystania ze strony. Wymagają Twojej zgody.
									</p>
								</div>
							</div>
						</div>
					</motion.section>

					{/* 9. Zarządzanie cookies */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							9. Zarządzanie plikami cookies
						</h2>
						<div className="space-y-4 paragraph-secondary">
							<p>
								Jeśli użytkownik nie chce otrzymywać plików cookies, może
								zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie
								obsługi plików cookies niezbędnych dla procesów
								uwierzytelniania, bezpieczeństwa, utrzymania preferencji
								użytkownika może utrudnić korzystanie ze stron www.
							</p>

							<h3 className="text-lg font-semibold mt-6 mb-3">
								Jak cofnąć zgodę na cookies analityczne:
							</h3>
							<ol className="list-decimal pl-6 space-y-2">
								<li>Wyczyść cookies w swojej przeglądarce</li>
								<li>Odśwież stronę</li>
								<li>Gdy pojawi się popup - wybierz "Tylko niezbędne"</li>
							</ol>

							<h3 className="text-lg font-semibold mt-6 mb-3">
								Instrukcje dla przeglądarek:
							</h3>
							<ul className="list-disc pl-6 space-y-1">
								<li>
									<a
										href="https://support.microsoft.com/pl-pl/help/17442"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Microsoft Edge
									</a>
								</li>
								<li>
									<a
										href="https://support.google.com/chrome/answer/95647"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Google Chrome
									</a>
								</li>
								<li>
									<a
										href="https://support.mozilla.org/pl/kb/jak-wlaczyc-i-wylaczyc-obsluge-ciasteczek"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Mozilla Firefox
									</a>
								</li>
								<li>
									<a
										href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Safari
									</a>
								</li>
								<li>
									<a
										href="https://help.opera.com/pl/latest/web-preferences/#cookies"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Opera
									</a>
								</li>
							</ul>
						</div>
					</motion.section>

					{/* 10. Kontakt */}
					<motion.section variants={itemVariants}>
						<h2 className="heading-secondary mb-4">
							10. Kontakt w sprawach prywatności
						</h2>
						<div className="bg-primary-foreground p-6 rounded-md border-2 border-foreground">
							<p className="paragraph-secondary mb-4">
								W sprawach związanych z ochroną danych osobowych lub polityką
								prywatności skontaktuj się z nami:
							</p>
							<div className="space-y-2">
								<p>
									<strong>E-mail:</strong>{" "}
									<a
										href="mailto:hello@iovi-ink.pl"
										className="text-primary hover:text-accent"
									>
										{process.env.EMAIL_TO}
									</a>
								</p>
								<p>
									<strong>Administrator danych:</strong> Jowita Potaczek
								</p>
								<p>
									<strong>Adres strony:</strong> https://iovi-ink.pl
								</p>
							</div>
						</div>
					</motion.section>

					<motion.div
						className="text-sm text-muted-foreground pt-8 border-t border-muted"
						variants={itemVariants}
					>
						<p>
							Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
						</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default PrivacyPolicyPage;
