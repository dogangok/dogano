export default function Home() {
  return (
    <>
      <section className="mx-auto mb-16 mt-8 max-w-2xl px-4 sm:mt-16">
        <h1 className="mb-10 text-3xl ">Theme palette</h1>
        <ul className="flex list-none flex-col gap-8 border-foreground px-6 lg:flex-row lg:gap-14">
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="bg-c-text h-12 w-12 rounded-full border-2" />
            Text
          </li>
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="h-12 w-12 rounded-full border-2 bg-background" />
            Background
          </li>
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="bg-c-text-alt h-12 w-12 rounded-full border-2" />
            Alt
          </li>
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="bg-c-detail h-12 w-12 rounded-full border-2" />
            Detail
          </li>
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="h-12 w-12 rounded-full border-2 bg-detail" />
            Primary
          </li>
          <li className="flex items-center gap-4 lg:flex-col">
            <div className="h-12 w-12 rounded-full border-2 bg-textalt" />
            Secondary
          </li>
        </ul>
      </section>
    </>
  )
}
