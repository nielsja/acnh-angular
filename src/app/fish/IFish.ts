import { IAvailabilityMonths } from "../shared/IAvailability";

export interface IFish {
    fishId: string;
    fishName: string;
    fishLocation: string;

    availabilityMonths: IAvailabilityMonths;
}