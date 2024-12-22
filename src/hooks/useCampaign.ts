import { useState, useEffect } from "react";
import { getCampaign } from "../services/CampaignService";
import { Campaign } from "../types/Campaign";

export const useCampaign = (id: string) => {
  const [campaign, setCampaign] = useState<Campaign>();

  useEffect(() => {
    getCampaign(id as string).then((campaign) => {
      setCampaign(campaign);
    });
  }, [id]);

  return campaign as Campaign;
};

export const useCampaign2 = (id: string) => {
  const [campaign, setCampaign] = useState<Campaign>();

  useEffect(() => {
    getCampaign(id as string).then((campaign) => {
      setCampaign(campaign);
    });
  }, [id]);

  return (
    function refreshCampaign() => {
      useEffect(() => {
        getCampaign(id as string).then((campaign) => {
          setCampaign(campaign);
        });
      }, [id]);
    }
  )
};
