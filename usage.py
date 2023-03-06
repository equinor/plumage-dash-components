from dash import Dash, Input, Output, State, html

import plumage_dash_components as pdc

app = Dash(__name__)

app.layout = html.Div(
    [
    pdc.Select(id="some")
    ]
)


# @app.callback(
#     Output("example-graph", "figure"),
#     [Input("colorscale", "colorscale")],
#     [State("example-graph", "figure")],
# )
# def update_colors(colorscale, figure):
#     figure["layout"]["colorway"] = colorscale
#     return figure


if __name__ == "__main__":
    app.run_server(debug=False)
