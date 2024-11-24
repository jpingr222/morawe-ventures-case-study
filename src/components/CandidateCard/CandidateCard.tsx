'use client';

import { CandidateType } from '@/types/candidate';
import Image from 'next/image';
import { Button } from 'react-aria-components';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineHeadsetMic } from 'react-icons/md';

export interface CandidateCardProps {
  candidate: CandidateType;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <article className="flex flex-col justify-between gap-8 rounded-xl border border-gray-300 px-4 py-7 shadow-md hover:border-gray-500 hover:shadow-xl">
      <header className="flex items-start gap-4">
        <Image
          src={candidate.avatarUrl}
          alt="Candidate avatar"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800">
            {candidate.name}
          </h3>
          <ul className="flex flex-col gap-1 text-xs font-normal text-gray-400">
            <li className="flex gap-1">
              <IoLocationOutline className="size-4" />
              <span className="sr-only">Address:&nbsp;</span>
              {candidate.address}
            </li>
            <li className="flex gap-1">
              <IoBriefcaseOutline className="size-4" />
              <span className="sr-only">Profession:&nbsp;</span>
              {candidate.profession}
            </li>
            <li className="flex gap-1">
              <MdOutlineHeadsetMic className="size-4" />
              <span className="sr-only">Education:&nbsp;</span>
              {candidate.education}
            </li>
          </ul>
        </div>
      </header>
      {candidate.appliedPosition && (
        <p className="-mt-4 flex flex-col gap-1">
          <span className="flex gap-1 text-xs font-normal text-gray-400">
            <IoBriefcaseOutline className="size-4" />
            Beworben auf Stellenanzeige:&nbsp;
          </span>
          <span className="text-xl font-semibold text-gray-800">
            {candidate.appliedPosition}
          </span>
        </p>
      )}
      <p className="text-base font-semibold text-gray-600">
        {candidate.profile}
      </p>
      <footer className="flex justify-between">
        <Button
          className="rounded bg-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-950 hover:bg-cyan-700 hover:text-cyan-50"
          onPress={() => {}}
        >
          Freischalten
        </Button>
        <Button
          className="rounded bg-red-500 px-4 py-2 text-sm font-semibold text-red-950 hover:bg-red-700 hover:text-red-100"
          onPress={() => {}}
        >
          Unpassend
        </Button>
      </footer>
    </article>
  );
}
