import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";


export default function Home() {
  return (
    <ContainerGRID>
       <h1 className="text-6xl">Home</h1>

       <Button isBtn={false}>
          Sign In
       </Button>
       <Button isBtn={false} btnStyle="btnSecondary">
          Sign In
       </Button>
    </ContainerGRID>
  )
}
