import { Engine, EngineLevel, EngineBaseAttack, EngineRank } from "@/types";

export const engines: Engine[] = [
  {
    id: "Stun_13",
    rank: "S",
    speciality: "Stun",
    baseAttack: 48,
    statusType: "critRate",
  },
  {
    id: "Attack_18",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critDamage",
  },
  {
    id: "Attack_1",
    rank: "S",
    speciality: "Attack",
    baseAttack: 46,
    statusType: "critRate",
  },
  {
    id: "Attack_2",
    rank: "S",
    speciality: "Attack",
    baseAttack: 46,
    statusType: "attackRate",
  },
  {
    id: "Attack_3",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critRate",
  },
  {
    id: "Attack_4",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critDamage",
  },
  {
    id: "Attack_15",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critDamage",
  },
  {
    id: "Attack_17",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critRate",
  },
  {
    id: "Attack_5",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_6",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_7",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Attack_8",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Attack_9",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Attack_10",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "critRate",
  },
  {
    id: "Attack_11",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_16",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "critRate",
  },
  {
    id: "Attack_12",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Attack_13",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Attack_14",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "critRate",
  },
  {
    id: "Stun_1",
    rank: "S",
    speciality: "Stun",
    baseAttack: 48,
    statusType: "impact",
  },
  {
    id: "Stun_2",
    rank: "S",
    speciality: "Stun",
    baseAttack: 46,
    statusType: "impact",
  },
  {
    id: "Stun_3",
    rank: "S",
    speciality: "Stun",
    baseAttack: 46,
    statusType: "impact",
  },
  {
    id: "Stun_11",
    rank: "S",
    speciality: "Stun",
    baseAttack: 48,
    statusType: "impact",
  },
  {
    id: "Stun_12",
    rank: "A",
    speciality: "Stun",
    baseAttack: 42,
    statusType: "impact",
  },
  {
    id: "Stun_4",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "energy",
  },
  {
    id: "Stun_5",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "impact",
  },
  {
    id: "Stun_6",
    rank: "A",
    speciality: "Stun",
    baseAttack: 42,
    statusType: "impact",
  },
  {
    id: "Stun_7",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "impact",
  },
  {
    id: "Stun_8",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Stun_9",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "impact",
  },
  {
    id: "Stun_10",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "energy",
  },
  {
    id: "Anomaly_1",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 46,
    statusType: "penRate",
  },
  {
    id: "Anomaly_9",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 48,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_10",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 50,
    statusType: "critRate",
  },
  {
    id: "Anomaly_11",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 48,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_12",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 48,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_2",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_3",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_4",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_5",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_6",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_7",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_8",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "penRate",
  },
  {
    id: "Support_10",
    rank: "S",
    speciality: "Support",
    baseAttack: 48,
    statusType: "attackRate",
  },
  {
    id: "Support_1",
    rank: "S",
    speciality: "Support",
    baseAttack: 46,
    statusType: "penRate",
  },
  {
    id: "Support_2",
    rank: "A",
    speciality: "Support",
    baseAttack: 40,
    statusType: "penRate",
  },
  {
    id: "Support_3",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Support_4",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Support_5",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Support_6",
    rank: "A",
    speciality: "Support",
    baseAttack: 40,
    statusType: "energy",
  },
  {
    id: "Support_7",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Support_8",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "energy",
  },
  {
    id: "Support_9",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "hp",
  },
  {
    id: "Defense_7",
    rank: "S",
    speciality: "Defense",
    baseAttack: 48,
    statusType: "impact",
  },
  {
    id: "Defense_8",
    rank: "A",
    speciality: "Defense",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Defense_1",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "defense",
  },
  {
    id: "Defense_2",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "hp",
  },
  {
    id: "Defense_3",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "defense",
  },
  {
    id: "Defense_4",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Defense_5",
    rank: "B",
    speciality: "Defense",
    baseAttack: 32,
    statusType: "defense",
  },
  {
    id: "Defense_6",
    rank: "B",
    speciality: "Defense",
    baseAttack: 32,
    statusType: "defense",
  },
];

export const engineAttackTable: Record<
  EngineBaseAttack,
  Record<EngineLevel, number>
> = {
  32: {
    0: 32,
    10: 82,
    20: 160,
    30: 239,
    40: 318,
    50: 397,
    60: 475,
  },
  40: {
    0: 40,
    10: 102,
    20: 201,
    30: 299,
    40: 397,
    50: 496,
    60: 594,
  },
  42: {
    0: 42,
    10: 107,
    20: 211,
    30: 314,
    40: 417,
    50: 521,
    60: 624,
  },
  46: {
    0: 46,
    10: 118,
    20: 231,
    30: 344,
    40: 457,
    50: 570,
    60: 684,
  },
  48: {
    0: 48,
    10: 123,
    20: 241,
    30: 359,
    40: 477,
    50: 595,
    60: 713,
  },
  50: {
    0: 50,
    10: 128,
    20: 251,
    30: 374,
    40: 497,
    50: 620,
    60: 743,
  },
};

export const engineCritRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 9.6,
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    0: 8,
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    0: 6.4,
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

export const engineCritDamageTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 19.2,
    10: 19.2,
    20: 25,
    30: 30.8, // unknown data
    40: 36.4, // unknown data
    50: 42.2, // unknown data
    60: 48,
  },
  // unknown data
  A: {
    0: 16,
    10: 16,
    20: 20.8,
    30: 25.6,
    40: 30.4,
    50: 35.2,
    60: 40,
  },
  // unknown data
  B: {
    0: 12.0,
    10: 12.8,
    20: 16.6,
    30: 20.4,
    40: 24.2,
    50: 28,
    60: 32,
  },
};

export const enginePenRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 9.6,
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    0: 8,
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    0: 6.4,
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

export const engineAttackRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 12,
    10: 12,
    20: 15.6, // unknown data
    30: 19.2, // unknown data
    40: 22.8, // unknown data
    50: 26.4, // unknown data
    60: 30,
  },
  A: {
    0: 10,
    10: 10,
    20: 13,
    30: 16,
    40: 19,
    50: 22,
    60: 25,
  },
  B: {
    0: 8,
    10: 8,
    20: 10.4, // unknown data
    30: 12.8, // unknown data
    40: 15.2, // unknown data
    50: 17.6, // unknown data
    60: 20,
  },
};
