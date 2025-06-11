import { AddressRepository } from "../../adapters/interfaces/AddressRepository";
export  class AddAddress {
    constructor(
        private addressRepository: AddressRepository
    ){}

    async execute(data: any): Promise<any> {
        return this.addressRepository.addAddress(data);
    }
}