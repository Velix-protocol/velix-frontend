import Section from "@/components/layouts/Section";
import LineChart from "@/components/app/Crosschain/LineChart";
import ClaimOnCrosschain from "@/components/app/Crosschain/ClaimOnCrosschain";
// import AddWalletCard from "@/components/ui/velix/cards/AddWalletCard";
export default function Crosschain(){
    return(
        <Section className="max-lg:mx-5 px-5 py-32" >
            <LineChart/>
            {/* <AddWalletCard/> */}
            <ClaimOnCrosschain/>
        </Section>
    )
}