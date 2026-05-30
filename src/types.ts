export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  metrics?: string;
}

export interface ClientCase {
  tag: string;
  title: string;
  description: string;
  image: string;
  metricLabel: string;
  metricValue: string;
  fullCaseUrl: string;
}

export interface Diferencial {
  id: string;
  number: string;
  title: string;
  description: string;
}
