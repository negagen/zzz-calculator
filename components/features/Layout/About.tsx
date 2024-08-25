import { Divider } from "antd";
import { HelpButton } from "@/components/features";

export const About = () => (
  <HelpButton
    title="このサイトについて"
    description="このサイトについて"
    className="w-full h-full"
    content={
      <div className="flex flex-col gap-1.5">
        <h2 className="text-lg font-bold">はじめに</h2>
        <p>当サイトは「ゼンレスゾーンゼロ」の非公式ダメージ計算機です。</p>
        <p>
          ダメージはVer1.1時点での推測による仕様に基づいており、また数値計算上の誤差を含みます。
        </p>
        <br />
        <p>
          そのため、このデータの値を保証するものではないことに注意してください。
        </p>
        <p>
          また、当サイトのデータを使用したことによる損害について、当サイトは一切の責任を負いません。
        </p>

        <Divider />

        <h2 className="text-lg font-bold">免責事項</h2>
        <p>
          当サイトで利用している画像はHoYoLABから引用したものが含まれています。
        </p>
        <p>
          これらの画像、および「ゼンレスゾーンゼロ」における全ての権利はHoYoverseに帰属します。
        </p>
        <p>
          また、当サイトは非公式のものであり、HoYoverseとは一切関係ありません。
        </p>

        <Divider />

        <h2 className="text-lg font-bold">意見、要望、不具合報告など</h2>
        <p>
          ご意見、ご要望、不具合報告に関しては
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSck0-g7tU4x7_EEKOtNu67hNcWY4UMsnKCBt6TCvwh9KRd9eg/viewform"
            target="_blank"
            className="text-blue-400 underline"
          >
            こちら
          </a>
          のGoogleフォームか、HoYoLABにてどうぞ。
        </p>
        <br />
        <p>このサイトはオープンソースで公開されています。</p>
        <p>
          開発に貢献したい方は
          <a
            href="https://github.com/yuemori/zzz-calculator"
            target="_blank"
            className="text-blue-400 underline"
          >
            こちら
          </a>
          からアクセスしてください。
        </p>
      </div>
    }
  />
);
