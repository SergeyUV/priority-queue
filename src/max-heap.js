const Node = require('./node');

class MaxHeap {
	constructor() {

		this.root = null;
		this.parentNodes = [];
		this.size = 0;
		this.lastInserted = null;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.lastInserted = node.parent;
		this.shiftNodeUp(node);
	}

	pop() {
		this.size--;
		if (!this.root)	{
			return;
		}
		
		let ret_val = this.root.data;

		return ret_val;
	}

	detachRoot() {
		console.log('parentnodes');
		console.log(this.parentNodes);
		if(!this.root){
			return;
		}
		
		if(this.parentNodes[0] === this.root){
			this.parentNodes.shift();
			this.detachedWasParent = true;
		}else{
			this.detachedWasParent = false;
		}

		let tmp = this.root;
		this.root = null;
		return tmp;
	}

	restoreRootFromLastInsertedNode(detached) {
		
		this.root = this.lastInserted;
		if(this.detachedWasParent){
			this.parentNodes.unshift(this.root);
		}
		//console.log('last: ');
		///console.log(Object.entries(this.lastInserted));
		//console.log('det: ');
		//console.log(Object.entries(detached));

		this.root.left = detached.left;
		this.root.left.parent = this.root;
		this.root.right = detached.right;
		this.root.right.parent = this.root;
		

		console.log('parentnodes');
		console.log(this.parentNodes);

	}

	size() {
	
		return this.size;
	}

	isEmpty() {
		return (this.size == 0)? true : false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	insertNode(node) {
		this.size++;
	
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
