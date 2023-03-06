##################################################################
#
# Copyright (c) 2021- Equinor ASA
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#
##################################################################

from dash import html, Dash
import plumage_dash_components


def test_plugin_placeholder(dash_duo):
    app = Dash(__name__)

    app.layout = html.Div(
        [
            html.Div(id="output"),
        ]
    )

    dash_duo.start_server(app)

    assert dash_duo.get_logs() == [], "browser console should contain no error"
