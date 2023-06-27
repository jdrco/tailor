import { Card } from '@/registry/new-york/ui/card';

interface HomeHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function HomeHeader({ heading, text, children }: HomeHeaderProps) {
  return (
    <Card className="flex p-8 items-end justify-between">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl mb-12">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </Card>
  );
}
