export interface DeviceAndSettingsAnalyzed extends DeviceAndSettings {
  analyzedData: Array<AnalyzedData> | undefined | null
}


export interface DeviceAndSettings {
  id: string | undefined;
  name: string;
  dataAnnotations: DataAnnotation[];
  latestData: Array<DataWithTime>


}

interface DataAnnotation {
  name: string;
  unit: string;
}

/* Correlates by index to data annotation */
interface DataWithTime
{
  values: Array<number>
  createdAt: string
}

interface AnalyzedData {
  average: number
  median: number
}