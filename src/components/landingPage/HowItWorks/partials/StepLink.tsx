export default function StepLink() {
  return (
    <div
      className={`w-[3.3rem] h-[1.5px] absolute rotate-90 -left-2 mt-[5.4rem] lg:mt-[2rem] max-lg:mx-auto lg:-right-[1.2rem] md:-translate-y-1/5 lg:top-1/2 z-50 bg-white 
      before:content-[''] before:absolute before:w-2 before:h-2 before:left-0
      before:bg-white before:rounded-full before:-mt-[3px]
      after:absolute after:w-2 after:h-2 after:rounded-full 
      after:bg-white after:-right-[5px] after:-mt-[3px]`}
    />
  );
}
