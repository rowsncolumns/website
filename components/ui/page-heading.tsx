import { cn } from "@/lib/utils";

export const PageHeading = ({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "max-w-[900px] pb-5 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.2]",
        className
      )}
      {...props}
    />
  );
};
