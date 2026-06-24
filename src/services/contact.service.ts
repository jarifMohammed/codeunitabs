export type ContactAction = "bookDemo" | "newsletter" | "directMail" | "downloadApp";

export async function handleBookDemo(): Promise<void> {
  // TODO: Connect to scheduling or CRM API.
}

export async function handleNewsletterSubscribe(): Promise<void> {
  // TODO: Connect to newsletter subscription API.
}

export async function handleDirectMail(): Promise<void> {
  // TODO: Connect to direct contact API.
}

export async function handleDownloadApp(): Promise<void> {
  // TODO: Connect to app download attribution API.
}

export async function submitContactIntent(action: ContactAction): Promise<void> {
  const handlers: Record<ContactAction, () => Promise<void>> = {
    bookDemo: handleBookDemo,
    newsletter: handleNewsletterSubscribe,
    directMail: handleDirectMail,
    downloadApp: handleDownloadApp,
  };

  await handlers[action]();
}
