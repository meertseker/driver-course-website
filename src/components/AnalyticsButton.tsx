'use client';

import Link from 'next/link';
import { trackProgramClick, trackPhoneCall } from '@/lib/analytics';

interface AnalyticsButtonProps {
  href: string;
  trackingType: 'program' | 'phone' | 'link';
  programName?: string;
  branch?: string;
  className?: string;
  children: React.ReactNode;
}

export default function AnalyticsButton({
  href,
  trackingType,
  programName,
  branch,
  className,
  children,
}: AnalyticsButtonProps) {
  const handleClick = () => {
    if (trackingType === 'program' && programName) {
      trackProgramClick(programName);
    } else if (trackingType === 'phone' && branch) {
      trackPhoneCall(branch);
    }
  };

  // For phone links
  if (trackingType === 'phone') {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  // For internal links
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

