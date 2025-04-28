from flask import Flask, request, jsonify, render_template
from hilm import hill_climbing, evalua_ruta

app = Flask(__name__)

@app.route('/tsp', methods=['POST'])
def resolver_tsp():
    data = request.get_json()
    coord = data['coordenadas']
    
    ruta = hill_climbing(coord)
    distancia_total = evalua_ruta(ruta, coord)
    
    return jsonify({
        'ruta': ruta,
        'distancia_total': distancia_total
    })

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
