import "./rank-badge.scss";
import { FC } from "react";
import IconMedal from "../../assets/icons/rank-medal.svg?react";
import clsx from "clsx";

interface IRankBadge {
  rank: string;
}

export const RankBadge: FC<IRankBadge> = (props) => {
  const { rank } = props;

  return (
    <span className="rank-badge">
      <IconMedal className={clsx("rank-badge-icon", rank)} />
    </span>
  );
};
