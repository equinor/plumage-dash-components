
module PlumageDashComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_plumagedashcomponents.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "plumage_dash_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "plumage_dash_components.min.js",
    external_url = "https://unpkg.com/plumage_dash_components@0.0.1/plumage_dash_components/plumage_dash_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "plumage_dash_components.min.js.map",
    external_url = "https://unpkg.com/plumage_dash_components@0.0.1/plumage_dash_components/plumage_dash_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
