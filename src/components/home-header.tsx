import { Card } from '@/registry/new-york/ui/card';

interface HomeHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function HomeHeader({ heading, text, children }: HomeHeaderProps) {
  return (
    <Card className="flex flex-col md:flex-row p-8 items-start md:items-end justify-between shadow-none">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl mb-12">{heading}</h1>
        {text && (
          <p className="text-lg text-muted-foreground mb-4 sm:mb-0">{text}</p>
        )}
      </div>
      {children}
    </Card>
  );
}
