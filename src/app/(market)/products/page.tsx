import FilterSelector from "@/client/components/store/filter-selector";

export default function Products() {

    return (
        <div className="h-screen pt-12 bg-gray-200">
            <div className="h-full w-full p-5 flex justify-center items-start gap-2">
                <FilterSelector/>
                <div className="h-full w-full rounded-lg bg-white p-4 flex justify-between">
                </div>
            </div>
        </div>
    )
}