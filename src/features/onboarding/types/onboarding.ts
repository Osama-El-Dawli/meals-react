export type OnboardingPage = {
  title: string;
  description: string;
};

export type OnboardingContainerProps = {
  pages: OnboardingPage[];
  pageIndex: number;
  onPageSelected: (index: number) => void;
  onNext: () => void;
  onSkip: () => void;
};