import { AddressRepository } from "../../adapters/interfaces/AddressRepository";

export class UpdateAddress {
    constructor(private addressRepository: AddressRepository) { }
    async execute(data: any, addressId: string): Promise<any> {
        return this.addressRepository.updateAddress(data, addressId);
    }
}