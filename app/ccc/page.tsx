import { Description } from "@/components/desciption";
import { InvestTable } from "@/components/invest-table";
import { LinkerContainer } from "@/components/linker-cotainer";
import { Overline } from "@/components/overline";
import { ProfitTable } from "@/components/profit-table";
import { SocialLinker } from "@/components/social-linker";
import { Status } from "@/components/status";
import { Topic } from "@/components/topic";
import { CCCInvestData, CCCProfitData } from "@/lib/data/ccc";

export default function CCCPage() {
  return (
    <>
      <Topic topic="CCC">
        <Status status="ongoing" marker="项目初期，还有空投机会" />
      </Topic>

      <Description desciption="CCC 致力于构建区块链信用系统， 目前已经在polygon链上发币" />
      <Description desciption="合约地址: 0x0907B8B13970DF091ECc9d4d4c7AE12A599Ad923" />
      <LinkerContainer topic="官方链接">
        <SocialLinker linker="https://www.ccchain.us/" name="website" />
        <SocialLinker linker="https://twitter.com/3C_chain" name="twitter" />
      </LinkerContainer>

      <InvestTable data={CCCInvestData} />
      <ProfitTable data={CCCProfitData} />

      <Overline />
    </>
  );
}
