import Section from "@/components/layouts/Section";
import LineChart from "@/components/app/Crosschain/LineChart";
import ClaimOnCrosschain from "@/components/app/Crosschain/ClaimOnCrosschain";
export default function Crosschain(){
    return(
        <Section className="max-lg:mx-5 pt-32 " >
            <LineChart/>
            <ClaimOnCrosschain/>
        </Section>
    )
}