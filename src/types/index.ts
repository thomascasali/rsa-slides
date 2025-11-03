export type SlideCategory =
  | 'intro'
  | 'theory'
  | 'asymmetric'
  | 'openssl'
  | 'practice'
  | 'advanced';

export interface Slide {
  id: number;
  title: string;
  category: SlideCategory;
  content: () => React.JSX.Element;
}

export interface SlideStats {
  total: number;
  byCategory: Record<SlideCategory, number>;
}
