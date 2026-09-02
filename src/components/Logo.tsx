import Image from "next/image";
import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={178}
      height={186}
      className={`h-auto w-auto ${className}`}
    />
  );
}

export function Wordmark({
  compact = false,
  className = "",
  priority = false,
}: {
  compact?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-wordmark.png"
      alt="ARC"
      width={492}
      height={192}
      priority={priority}
      className={`w-auto ${compact ? "h-8" : "h-9"} ${className}`}
    />
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-lockup.png"
      alt="Athletic Recovery Clinic"
      width={598}
      height={303}
      priority
      className={`relative mx-auto h-auto w-[min(92vw,34rem)] ${className}`}
    />
  );
}

export function BrandLink({
  compact = false,
  className = "",
  priority = false,
}: {
  compact?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="#top"
      className={`inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-green/70 ${className}`}
      aria-label="Athletic Recovery Clinic home"
    >
      <Wordmark compact={compact} priority={priority} />
    </Link>
  );
}
