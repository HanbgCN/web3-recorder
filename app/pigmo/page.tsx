"use client";

import { Status } from "@/components/status";
import { Topic } from "@/components/topic";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiscordLogo, TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function PigmoPage() {
  return (
    <>
      <div
        heading="Pigmo"
        status="已结束"
        description="Pigmo 是一个基于Solana区块链的线上博彩平台，有实体公司做支撑，目前已经上线了多种类型的博彩游戏"
      />
      <Topic topic="Pigmo">
        <Status status="ongoing" />
      </Topic>
      <p className="text-muted-foreground">
        计划2024.03.15发行NFT，总量10000枚，后续上线$PIG，
      </p>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">官方链接</span>
        <a
          href="https://twitter.com/pigmo_com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-blue-500 rounded-lg p-2 hover:bg-gray-200"
        >
          <TwitterLogo size={20} />X (Twitter)
        </a>

        <a
          href="https://discord.gg/pd9XS6Hf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-blue-500 rounded-lg p-2 hover:bg-gray-200"
        >
          <DiscordLogo size={20} />
          Discord
        </a>
      </div>
      <p className="text-lg font-bold">NFT拿白教程</p>
      <div className="flex items-center">
        <span>1.进入Subber，登入账号</span>
        <a
          href="https://www.subber.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-blue-500 rounded-lg p-2 underline"
        >
          https://www.subber.xyz/
        </a>
      </div>
      <Image
        src="/pigmo/subber-login.png"
        alt="step1"
        width={1200}
        height={700}
      />
      <p>填入个人信息</p>
      <Image src="/pigmo/userInfo.png" alt="step1" width={1200} height={700} />
      <div className="flex items-center">
        <span>进入活动页，点击绑定Discord和X(Twitter)</span>
        <a
          href="https://www.subber.xyz/rugster/giveaways/pigmo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-blue-500 rounded-lg p-2 underline"
        >
          https://www.subber.xyz/rugster/giveaways/pigmo
        </a>
      </div>
      <span>这个网站的验证有一点点慢，大家稍微等一等</span>
      <Image
        src="/pigmo/link-account.png"
        alt="step1"
        width={1200}
        height={700}
      />
      <span>完成对应任务</span>
      <Image
        src="/pigmo/finish-task.png"
        alt="step1"
        width={1200}
        height={700}
      />
      <span>有点任务需要加入其他项目的Discord，这这里可以进入Discord</span>
      <span>
        有些需要Discord角色的任务，要在验证Discord之后才能获取，加入DC后注意验证
      </span>
      <Image src="/pigmo/join-dc.png" alt="step1" width={1200} height={700} />
      <span>这个按钮亮起就是完成任务，点击即可</span>
      <Image src="/pigmo/enter.png" alt="step1" width={1200} height={700} />
      <span>任务完成，已经参与到了抽奖当中</span>
      <Image src="/pigmo/success.png" alt="step1" width={1200} height={700} />
      <div className="flex items-center">
        <span>在这个链接下还可以继续参加其他的抽奖</span>
        <a
          href="https://www.subber.xyz/pigmo/allowlist/pigmo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-blue-500 rounded-lg p-2 underline"
        >
          https://www.subber.xyz/pigmo/allowlist/pigmo
        </a>
      </div>
      <span>每个项目单独抽奖，参与的越多，抽中的概率越大</span>
      <Image src="/pigmo/others.png" alt="step1" width={1200} height={700} />
      <Separator className="my-16" />
      <p className="text-muted-foreground text-center">over!</p>
      <div className="pt-16" />
    </>
  );
}
