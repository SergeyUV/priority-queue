class Node {
	
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left == null){
			this.left = node;
			return;	
		}

		if(this.right == null){
			this.right = node;
			return;
		}
	}

	removeChild(node) {
		if(this.left == node){
			this.left = null;
			node.parent = null;
			return;	
		}

		if(this.right == node){
			this.right = null;
			node.parent = null;
			return;
		}
		
		throw new Error(' Node is not a child of this node');
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
