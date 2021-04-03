"""
Adapted from https://github.com/LarremoreLab/LarremoreLab.github.io/
"""

from collections import defaultdict
from webweb import Web
from pathlib import Path
import yaml

DATA_PATH = Path(__file__).parent.joinpath('_data')
INTERESTS_PATH = DATA_PATH.joinpath("academic_interests.yml")
WEBWEB_JSON_PATH = DATA_PATH.joinpath('knowledge.json')

KIND_TO_COLOR_MAP = {
    'Theory': '#78C81F',
    'Application': '#1C7BE0',
    'Methods': '#E01E7B',
}


def load_yaml(path):
    return yaml.load(path.read_text(), Loader=yaml.FullLoader)


def make_network(data):
    nodes = defaultdict(dict)
    edges = []
    
    all_edges = []
    interests = data["interests"]["topics"]
    for interest in interests:
        area = interest["area"]
        nodes[area] = {
            "name": area,
            "kind": interest["kind"]
        }
    for interest in interests:
        area = interest["area"]
        for related in interest["related"]:
            all_edges.append([area, related])

    # Get only unique edges
    for edge in all_edges:
        if edge in edges or [edge[1], edge[0]] in edges:
            continue
        edges.append(edge)

    for node in nodes:
        kind = nodes[node]['kind']
        size = 1
        # if kind == 'Theory':
        #     size = 1.5
        # elif kind == 'Application':
        #     size = 1.25

        nodes[node]['size'] = size
        nodes[node]['color'] = KIND_TO_COLOR_MAP[kind]

    web = Web(adjacency=edges, nodes=dict(nodes))
    web.display.sizeBy = 'size'
    web.display.colorBy = 'color'
    web.display.hideMenu = True
    web.display.showLegend = False
    web.display.gravity = 1e-5
    web.display.charge = 500
    web.display.width = 400
    web.display.height = 400
    web.display.scaleLinkOpacity = True
    web.display.scaleLinkWidth = True
    web.display.scales = {
        'nodeSize': {
            'min': 0.65,
            'max': 1.1,
        }
    }

    WEBWEB_JSON_PATH.write_text(web.json)
    #web.show()


if __name__ == '__main__':
    data = {
        "interests": load_yaml(INTERESTS_PATH)
    }

    make_network(data)
