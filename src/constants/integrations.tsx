import { InstagramDuoToneBlue,SalesForceDuoToneBlue } from "@/icons";

type Props={
    title:string;
    icon:React.ReactNode;
    description: string;
    strategy:"INSTAGRAM" |"CRM"
};

export const INTEGRATION_CARDS: Props[]=[
    {
        title: "Connect Instagram",
        description:
          "Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010 exclusively on iOS.",
        icon: <InstagramDuoToneBlue />,
        strategy: "INSTAGRAM",
      },
      {
        title: "Connect Salesforce",
        description:
          "Provides customer relationship management software and is an enterprise application focused company.",
        icon: <SalesForceDuoToneBlue />,
        strategy: "CRM",
      },
]