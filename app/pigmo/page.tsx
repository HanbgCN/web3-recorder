"use client";

import { Description } from "@/components/desciption";
import { LinkerContainer } from "@/components/linker-cotainer";
import { InvestTable } from "@/components/invest-table";
import { Overline } from "@/components/overline";
import { SocialLinker } from "@/components/social-linker";
import { Status } from "@/components/status";
import { Topic } from "@/components/topic";
import React from "react";
import { PigmoInvestData, PigmoProfitData } from "@/lib/data/pigmo";
import { ProfitTable } from "@/components/profit-table";

export default function PigmoPage() {
  return (
    <>
      <Topic topic="Pigmo">
        <Status status="finished" marker="NFT mint阶段结束" />
        <Status status="counting" marker="等待$PIG TGE" />
      </Topic>
      <Description desciption="Pigmo 是一个基于Solana区块链的线上游戏平台，有实体公司做支撑，目前已经上线了多种类型小游戏" />
      <Description desciption="已经发行NFT 5000枚，代币$PIG在TGE时会向NFT持有者发放空投，以及后续NFT质押挖矿$PIG" />
      <LinkerContainer topic="官方链接">
        <SocialLinker linker="https://pigmo.com/" name="website" />
        <SocialLinker linker="https://twitter.com/pigmo_com" name="twitter" />
        <SocialLinker linker="https://discord.gg/pigmo" name="discord" />
      </LinkerContainer>

      <InvestTable data={PigmoInvestData} />
      <ProfitTable data={PigmoProfitData} />

      <Overline />
    </>
  );
}
