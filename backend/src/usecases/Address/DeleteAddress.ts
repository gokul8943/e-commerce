import { AddressRepository } from "../../adapters/interfaces/AddressRepository";

export class DeleteAddress{
    constructor(private readonly addressRepository: AddressRepository){}
    async execute(addressId: string): Promise<any>{
        return this.addressRepository.deleteAddress(addressId);
    }
}