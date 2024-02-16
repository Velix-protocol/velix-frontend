export default function StepLink() {
  return (
    <div
      className={`w-[2rem] h-[1.5px] absolute max-lg:bottom-0 max-lg:right-0 max-lg:left-0 max-lg:rotate-90 max-lg:mx-auto lg:-right-[1.2rem] md:-translate-y-1/5 lg:top-1/2 z-50 bg-velix-primary 
      before:content-[''] before:absolute before:w-2 before:h-2 before:left-0
      before:bg-velix-primary before:rounded-full before:-mt-[3px]
      after:absolute after:w-2 after:h-2 after:rounded-full 
      after:bg-velix-primary after:-right-[5px] after:-mt-[3px]`}
    />
  );
}
