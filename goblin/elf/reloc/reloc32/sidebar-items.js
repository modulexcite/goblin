initSidebarItems({"constant":[["SIZEOF_REL",""],["SIZEOF_RELA",""]],"fn":[["from_fd",""],["from_raw_rel","Gets the rel entries given a rel pointer and the size of the rel section in the binary, in bytes. Assumes the pointer is valid and can safely return a slice of memory pointing to the rels because: 1. `ptr` points to memory received from the kernel (i.e., it loaded the executable), or 2. The binary has already been mmapped (i.e., it's a `SharedObject`), and hence it's safe to return a slice of that memory. 3. Or if you obtained the pointer in some other lawful manner"],["from_raw_rela","Gets the rela entries given a rela pointer and the size of the rela section in the binary, in bytes. Assumes the pointer is valid and can safely return a slice of memory pointing to the relas because: 1. `ptr` points to memory received from the kernel (i.e., it loaded the executable), or 2. The binary has already been mmapped (i.e., it's a `SharedObject`), and hence it's safe to return a slice of that memory. 3. Or if you obtained the pointer in some other lawful manner"],["r_info",""],["r_sym",""],["r_type",""]],"struct":[["Rel","Relocation without an addend"],["Rela","Relocation with an explicit addend"]]});