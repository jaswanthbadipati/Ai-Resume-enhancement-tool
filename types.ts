export type Domain = 'software' | 'marketing' | 'finance' | 'healthcare';
export type Template = 'modern' | 'classic' | 'minimal' | 'professional';

export interface EnhancementFeature {
  title: string;
  description: string;
  enabled: boolean;
}

export interface ProcessingOptions {
  domain: Domain;
  template: Template;
  features: EnhancementFeature[];
}