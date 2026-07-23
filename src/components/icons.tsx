export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.77.462 3.492 1.34 5.008L2 22l5.135-1.345A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.16a8.13 8.13 0 0 1-4.148-1.135l-.297-.176-3.048.799.813-2.97-.193-.306A8.15 8.15 0 0 1 3.86 12c0-4.516 3.664-8.18 8.18-8.18 4.516 0 8.18 3.664 8.18 8.18 0 4.516-3.664 8.16-8.18 8.16z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M7 3.5c.5 1.4 1 2.6 1.7 3.7.3.5.2 1-.2 1.4L7 10c-.4.4-.5.9-.2 1.4a13.6 13.6 0 0 0 5.8 5.8c.5.3 1 .2 1.4-.2l1.4-1.5c.4-.4.9-.5 1.4-.2 1.1.7 2.3 1.2 3.7 1.7.9.3 1.5 1.2 1.3 2.1-.3 1.5-1.6 2.5-3.1 2.4C11.4 21 3 12.6 2.6 5.4c-.1-1.5.9-2.8 2.4-3.1.9-.2 1.8.4 2 1.2z" />
    </svg>
  );
}

/** Recurring "shelter" arc motif — a partial ring evoking an embrace, used as background accent and as a badge frame. */
export function ArcMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="188" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M30 260a170 170 0 0 1 300-140" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70 300a230 230 0 0 1 320-230" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

export function StepArc({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={`relative inline-flex h-14 w-14 items-center justify-center ${className ?? ""}`}>
      <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full">
        <path d="M4 38a24 24 0 0 1 42-16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      </svg>
      <span className="font-display text-lg">{children}</span>
    </span>
  );
}
