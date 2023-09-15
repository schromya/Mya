import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-10xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hey there, tis Mya <br></br><br></br><br></br>
        </div>

        <div>
          <div class="grid grid-cols-4 grid-rows-1 gap-4">
            <div class="w-full">Uncool</div>
            <div class="w-full">Cool as IceCream</div>
            <div class="w-full"></div>
            <div class="w-full">Camel Cool</div>
          </div>

          <div>|-----------|-----------|-----------|-----------|-----------|-----------|</div>

          <div class="grid grid-cols-4 grid-rows-1 gap-4">
            <div class="w-full">^</div>
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="w-full">^</div>
          </div>

          <div class="grid grid-cols-4 grid-rows-1 gap-4">
            <div class="w-full">Jaren</div>
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="w-full">Mya</div>
          </div>
        </div>


    </main>
  )
}
