import { Model } from "mongoose"
import { IAddressSchema } from "../interfaces/IAddressSchema"
import { AddressRepository } from "../interfaces/AddressRepository"

export class AddressRepositoryImpl implements AddressRepository{
    private readonly AddressModel: Model<IAddressSchema>
    constructor(addressModel: Model<IAddressSchema>) {
        this.AddressModel = addressModel
    }

    async addAddress(data: any): Promise<any> {
        try {
            const address = await this.AddressModel.create(data)
            return address
        } catch (error) {
            console.log(error);
        }
    }   

    async updateAddress(data: any, addressId: string): Promise<any> {
        try {
            const address = await this.AddressModel.findOneAndUpdate({ _id: addressId }, data, { new: true })
            return address
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAddress( addressId: string): Promise<any> {
        try {
            const address = await this.AddressModel.findOneAndDelete({ _id: addressId })
            return address
        } catch (error) {
            console.log(error);
        }
    }
}