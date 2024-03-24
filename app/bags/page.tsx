"use client";

import { Description } from "@/components/desciption";
import { InvestTable } from "@/components/invest-table";
import { LinkerContainer } from "@/components/linker-cotainer";
import { Overline } from "@/components/overline";
import { ProfitTable } from "@/components/profit-table";
import { SocialLinker } from "@/components/social-linker";
import { Status } from "@/components/status";
import { Topic } from "@/components/topic";
import { BagsInvestData } from "@/lib/data/bags";
import { BagsProfitData } from "../../lib/data/bags";

export default function BagsPage() {
  return (
    <>
      <Topic topic="Bags">
        <Status status="ongoing" marker="当前1.5SOL预售阶段" />
        <Status status="finished" marker="上线后价格6SOL" />
      </Topic>
      <Description desciption="移动端APP，收费OG，土狗嗅探器，土狗空投金铲子，社区化运营与推广Solana上的新项目" />
      <Description desciption="当前预售阶段1.5SOL每OG卡，可以重复多买，多买多得" />
      <Description desciption="社区空投已经开始发放，1000 $ABBL价值40$左右" />
      <LinkerContainer topic="官方链接">
        <SocialLinker linker="https://bags.fm/$bghan20" name="website" />
        <SocialLinker linker="https://twitter.com/BagsApp" name="twitter" />
      </LinkerContainer>

      <InvestTable data={BagsInvestData} />
      <ProfitTable data={BagsProfitData} />
      <Overline />
    </>
  );
}
