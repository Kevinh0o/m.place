import FilterSelector from "@/client/components/store/filter-selector";
import Pagination from "@/client/components/store/pagination";
import Product from "@/client/components/store/product";

export default function Products() {

    return (
        <div className="min-h-screen pt-12 bg-gray-200">
            <div className="h-full w-full p-5 flex justify-center items-start gap-2">
                <FilterSelector/>
                <div className="w-full rounded-lg gap-2 flex flex-wrap">
                    <Product/>
                </div>
            </div>
            <div className="h-full flex items-center justify-center">
                <Pagination/>
            </div>
        </div>
    )
}