; ModuleID = 'autocfg_b6ab1676a49ede51_2.a9de46f663d5a640-cgu.0'
source_filename = "autocfg_b6ab1676a49ede51_2.a9de46f663d5a640-cgu.0"
target datalayout = "e-m:o-i64:64-i128:128-n32:64-S128"
target triple = "arm64-apple-macosx11.0.0"

; autocfg_b6ab1676a49ede51_2::probe
; Function Attrs: uwtable
define void @_ZN26autocfg_b6ab1676a49ede51_25probe17h3b8c20fbf345290eE() unnamed_addr #0 {
start:
  %0 = alloca i32, align 4
  store i32 -2147483648, ptr %0, align 4
  %_0.i = load i32, ptr %0, align 4, !noundef !2
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind speculatable willreturn memory(none)
declare i32 @llvm.bitreverse.i32(i32) #1

attributes #0 = { uwtable "frame-pointer"="non-leaf" "probe-stack"="inline-asm" "target-cpu"="apple-m1" }
attributes #1 = { nocallback nofree nosync nounwind speculatable willreturn memory(none) }

!llvm.module.flags = !{!0}
!llvm.ident = !{!1}

!0 = !{i32 8, !"PIC Level", i32 2}
!1 = !{!"rustc version 1.77.1 (7cf61ebde 2024-03-27)"}
!2 = !{}
