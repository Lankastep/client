import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 9
        this._priceRange = { min: 0, max: 0 };
        makeAutoObservable(this)
    }
    filterDevicesByPrice() {
        const filteredDevices = this._devices.filter(device => {
            const price = device.price; // получаем цену товара
            return price >= this._priceRange.min && price <= this._priceRange.max;
        });

        // Instead of directly updating the _devices array, create a new array or reset to the original array if the filtered array is empty
        this._devices = filteredDevices.length > 0 ? filteredDevices : this._devices;
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    resetFilter() {
        this.setPage(1);
        this._selectedType = {}; // Reset selected type to empty
        this._selectedBrand = {}; // Reset selected brand to empty
        this._priceRange = { min: 0, max: 0 };
        this.filterDevicesByPrice();
    }



    setPriceRange(min, max) {
        this._priceRange = { min, max };
    }

    get priceRange() {
        return this._priceRange;
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}