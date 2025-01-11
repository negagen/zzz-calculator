import { Divider } from "antd";
import { HelpButton } from "@/components/features";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <HelpButton
      title={t("components.About.title")}
      description={t("components.About.title")}
      className="w-full h-full"
      content={
        <div className="flex flex-col gap-1.5">
          <h2 className="text-lg font-bold">{t("components.About.0")}</h2>
          <p>{t("components.About.1")}</p>
          <p>{t("components.About.2")}</p>
          <br />
          <p>{t("components.About.3")}</p>
          <p>{t("components.About.4")}</p>

          <Divider />

          <h2 className="text-lg font-bold">{t("components.About.5")}</h2>
          <p>{t("components.About.6")}</p>
          <p>{t("components.About.7")}</p>
          <p>{t("components.About.8")}</p>

          <Divider />

          <h2 className="text-lg font-bold">{t("components.About.9")}</h2>
          <p>
            {t("components.About.10")}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSck0-g7tU4x7_EEKOtNu67hNcWY4UMsnKCBt6TCvwh9KRd9eg/viewform"
              target="_blank"
              className="text-blue-400 underline"
            >
              {t("components.About.11")}
            </a>
            {t("components.About.12")}
          </p>
          <br />
          <p>{t("components.About.13")}</p>
          <p>
            {t("components.About.14")}
            <a
              href="https://github.com/yuemori/zzz-calculator"
              target="_blank"
              className="text-blue-400 underline"
            >
              {t("components.About.15")}
            </a>
            {t("components.About.16")}
          </p>
        </div>
      }
    />
  );
};
