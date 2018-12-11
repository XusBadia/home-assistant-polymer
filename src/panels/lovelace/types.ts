import { HomeAssistant } from "../../types";
import { LovelaceCardConfig, LovelaceConfig } from "../../data/lovelace";

export interface Lovelace {
  config: LovelaceConfig;
  editMode: boolean;
  mode: "generated" | "temp_generated" | "yaml" | "storage";
  enableFullEditMode: () => void;
  setGeneratedMode: (generatedMode: boolean) => void;
  setEditMode: (editMode: boolean) => void;
  saveConfig: (newConfig: LovelaceConfig) => Promise<void>;
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  getCardSize(): number;
  setConfig(config: LovelaceCardConfig): void;
}

export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: LovelaceCardConfig): void;
}
