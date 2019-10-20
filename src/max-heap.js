const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		
		if(!this.root){
			this.root = node;
			this.parentNodes.push(this.root);
			return;
		}
		
		while (true){
			
			if(this.parentNodes[0].left == null){
				this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.push(node);
				return;
			}

			if(this.parentNodes[0].right == null){
				this.parentNodes[0].right = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.push(node);
				this.parentNodes.shift();
				return;
			}

		}
	}

	shiftNodeUp(node) {
	
		if(!node.parent){
			this.root = node;
			return;
		}
		
		let i = this.parentNodes.indexOf(node);
		let par_i = this.parentNodes.indexOf(node.parent);
		if(par_i >= 0){
			let tmp = this.parentNodes[i];
			this.parentNodes[i] = this.parentNodes[par_i];
			this.parentNodes[par_i] = tmp;
		} else if(i >= 0) {
			this.parentNodes[i] = node.parent;
		}
		node.swapWithParent();
		this.shiftNodeUp(node);
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
