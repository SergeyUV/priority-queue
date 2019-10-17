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
			node.parent = this;
			return;	
		}

		if(this.right == null){
			this.right = node;
			node.parent = this;
			return;
		}
	}

	removeChild(node) {
		let found = false;
		
		if(this.left == node){
			this.left = null;
			node.parent = null;
			found = true;	
		}

		if(this.right == node){
			this.right = null;
			node.parent = null;
			found = true;
		}
		
		if (! found) {throw new Error(' Node is not a child of this node');}
	}

	remove() {
		if(this.parent == null){return;}
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent == null){return;}
		console.log('call swap');
		const was_parent = this.parent;
		this.parent = was_parent.parent;
		was_parent.parent = this;
		
		// if(was_parent.left == this){
		// 	console.log(was_parent.right.parent);
		//  	was_parent.right.parent = this;
		// } else if(was_parent.right == this){
		// 	console.log(was_parent.left.parent);
		//  	was_parent.left.parent = this;
		// }
		
		

	}
}

module.exports = Node;
